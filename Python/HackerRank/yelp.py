# <-- EXPAND to see the data classes
import fileinput


class Message:
    def __init__(self, sender, recipient, conversation_id):
        self.sender = sender
        self.recipient = recipient
        self.conversation_id = conversation_id


"""
    Sample Input:
        biz_owner_id: 42
        all_messages: [
            {"sender": 1,  "recipient": 42, "conversation_id": 1},
            {"sender": 42, "recipient": 1,  "conversation_id": 1},
            {"sender": 2,  "recipient": 42, "conversation_id": 2},
            {"sender": 2,  "recipient": 42, "conversation_id": 2},
            {"sender": 3,  "recipient": 88, "conversation_id": 3},
            {"sender": 3,  "recipient": 42, "conversation_id": 4},
        ]

    Sample Output:
        33 (Business owner 42 received three conversations total (1, 2, and 4), but only
        responded to one conversation (conversation ID 1)).
"""
def business_responsiveness_rate(biz_owner_id, all_messages):
    conversations_bo_wrote = 0
    conversations_bo_involved = 0
    if not all_messages:
        return 0
    for message in all_messages:
        if message.sender == biz_owner_id:
            conversations_bo_wrote += 1
            conversations_bo_involved += 1
        if message.recipient == biz_owner_id:
            conversations_bo_involved += 1
    return round((conversations_bo_wrote / conversations_bo_involved) * 100)

if __name__ == '__main__':

    lines = list(fileinput.input())
    biz_owner_id = lines[0].rstrip()

    all_messages = []
    for line in lines[1:]:
        if not line:
            break
        sender, recipient, conversation_id = line.split(' ')
        all_messages.append(
            Message(
                sender,
                recipient,
                conversation_id.rstrip(),
            ),
        )

    print(business_responsiveness_rate(biz_owner_id, all_messages))
