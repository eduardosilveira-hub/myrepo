using System;
using System.Activities;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Workflow;

namespace enercare.customworkflows
{
    public class CopySiteSettings : CodeActivity
    {
        [RequiredArgument]
        [Input("Copy From:")]
        [ReferenceTarget("adx_website")]
        public InArgument<EntityReference> settingFrom { get; set; }

        protected override void Execute(CodeActivityContext executionContext)
        {
            ITracingService tracing = executionContext.GetExtension<ITracingService>();

            IWorkflowContext context = executionContext.GetExtension<IWorkflowContext>();
            IOrganizationServiceFactory serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
            IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);

            if (context.Depth > 2) return;

            // Get Parameters
            EntityReference websiteIDforConfig = this.settingFrom.Get<EntityReference>(executionContext);

            tracing.Trace($"Fetching context currentRecord");
            Entity currentRecord;
            try
            {
                currentRecord = service.Retrieve(context.PrimaryEntityName, context.PrimaryEntityId, new ColumnSet("adx_name", "adx_value"));
            }
            catch(Exception ex)
            {
                tracing.Trace($"Error fetching record: {ex.Message}");
                return;
            }
            
            tracing.Trace($"Got toRecord");

            tracing.Trace($"Fetching fromSettingValues");
            QueryExpression queryFromSetting = new QueryExpression
            {
                EntityName = context.PrimaryEntityName,
                ColumnSet = new ColumnSet("adx_name", "adx_value"),
                Criteria =
                {
                    Filters =
                    {
                        new FilterExpression
                        {
                            FilterOperator = LogicalOperator.And,
                            Conditions =
                            {
                                new ConditionExpression
                                {
                                    AttributeName = "adx_name",
                                    Operator = ConditionOperator.Equal,
                                    Values = { currentRecord.Attributes["adx_name"] }
                                },
                                new ConditionExpression
                                {
                                    AttributeName = "adx_websiteid",
                                    Operator = ConditionOperator.Equal,
                                    Values = { websiteIDforConfig.Id }
                                }
                            }
                        }
                    },
                }
            };
                        
            var settingToCopy = service.RetrieveMultiple(queryFromSetting);


            if (settingToCopy.Entities.Count < 1) return;
            else tracing.Trace($"Record Count: {settingToCopy.Entities.Count}");

            foreach (var attr in settingToCopy[0].Attributes)
            {
                tracing.Trace($"Attr {attr.Key} : Value {attr.Value}");
            }

            tracing.Trace($"Comparing");
            tracing.Trace($"{settingToCopy[0].Attributes["adx_value"]} == {currentRecord.Attributes["adx_value"]}");
            if (settingToCopy[0].Attributes["adx_value"] == currentRecord.Attributes["adx_value"])
            {
                tracing.Trace($"already the same - stop workflow");
                return;
            }
            else
            {
                tracing.Trace($"Setting up entity to update");
                var settingToUpdate = new Entity(context.PrimaryEntityName)
                {
                    Id = currentRecord.Id,
                    ["adx_value"] = settingToCopy[0].Attributes["adx_value"]
                };
                tracing.Trace($"updating");

                service.Update(settingToUpdate);
            }
        }

    }
}
