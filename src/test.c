#include <stdio.h>

#include <stdlib.h>

struct Node
{
    int data;
    struct Node *next;
};

int size(struct Node *head)
{
    struct Node *tmp = head;
    int index = 1;
    while (tmp != NULL)
    {
        tmp = tmp->next;
        index++;
    }
    return index;
}

int main()
{
    struct Node *head = NULL;
    struct Node *current = NULL;

    // Create the linked list
    for (int i = 0; i < 7; i++)
    {
        struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));
        newNode->data = i;
        newNode->next = NULL;

        if (head == NULL)
        {
            // Initialize the head for the first node
            head = newNode;
            current = newNode;
        }
        else
        {
            // Append to the list
            current->next = newNode;
            current = newNode;
        }
    }

    // Calculate the middle index (integer division + 1 for odd-sized lists)
    int midleIndex = (size(head) / 2);

    // Traverse to the middle node
    struct Node *tmp = head;
    for (int i = 0; i < midleIndex; i++)
    {
        tmp = tmp->next;
    }

    // Print the middle node
    printf("Middle node: %d\n", tmp->data);

    // Free the linked list
    while (head != NULL)
    {
        struct Node *next = head->next;
        free(head);
        head = next;
    }

    return 0;
}
