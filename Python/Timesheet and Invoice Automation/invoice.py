import openpyxl
from datetime import datetime, timedelta
import win32com.client
import calendar
import os

invoiceBaseDir = 'D:\OneDrive\Contracts\EC2ML\Invoices\\'

excelFile = invoiceBaseDir + 'Invoice_Template.xlsx'
today = datetime.today().strftime('%d/%m/%Y')
dt = datetime.strptime(today, '%d/%m/%Y')
start = dt - timedelta(days=dt.weekday())
end = start + timedelta(days=6)

wb = openpyxl.load_workbook(excelFile)
sheet = wb.active

# set end week date on Date field
sheet[f'E4'].value = end.strftime('%B %d, %Y')

# set end week date on the invoice line
sheet[f'B17'].value = end.strftime('%B %d, %Y')

# Set invoice #
invoiceNumber = 'EC2ML_'+ str(calendar.month_abbr[datetime.today().month].upper()) + str(end.day) + str(datetime.today().year)
sheet[f'E7'].value = invoiceNumber

wb.save(excelFile)
wb.close()


# Print invoice in PDF
o = win32com.client.Dispatch("Excel.Application")
o.Visible = False
wb_path = invoiceBaseDir + 'Invoice_Template.xlsx'
wb = o.Workbooks.Open(wb_path)

# for ordering files on directory
counter = sheet[f'B30'].value
sheet[f'B30'].value = counter + 1

nameOfFile = str(calendar.month_name[datetime.today().month]) + str(end.day) + '_' + str(datetime.today().year) + '.pdf'
path_to_pdf = invoiceBaseDir + nameOfFile
print('path to initial pdf: ',path_to_pdf)

wb.WorkSheets([1]).Select()
wb.ActiveSheet.ExportAsFixedFormat(0, path_to_pdf)
wb.Close(True, wb_path)

# Set invoice folder name
invoiceFolder = invoiceBaseDir + str(datetime.today().year) + "_" + str(calendar.month_name[datetime.today().month])
print('path to new pdf: ',invoiceFolder)

if os.path.exists(invoiceFolder):
    print('dir exists - moving file')
    os.rename(path_to_pdf, invoiceFolder + '\\' + nameOfFile)
else:
    print('dir doesnt exists - creating and moving file')
    os.mkdir(invoiceFolder)
    os.rename(path_to_pdf, invoiceFolder + '\\' + nameOfFile)


# Complete code to auto execute timesheet