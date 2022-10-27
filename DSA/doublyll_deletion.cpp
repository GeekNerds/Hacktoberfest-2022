#include <iostream>
using namespace std;

struct node{
    int data;
    node* next;
    node* prev;

    node(int val){
        data = val;
        next = NULL;
        prev = NULL;
    }
};

void deleteAtHead(node*&head){
    node* todelete = head;
    head = head->next;
    head->prev = NULL;

    delete todelete;
}

void deletion(node* &head,int pos){
    node* temp = head;
    int count = 1;

    if(pos==1){
        deleteAtHead(head);
        return;
    }
    while(temp!=NULL && count!=pos){
        temp = temp->next;
        count++;
    }
    temp->prev->next = temp->next;
    if(temp->next!=NULL){
    temp->next->prev = temp->prev;
    }
}

void insertAtTail(node* &head, int val){
    node* n = new node(val);
    node* temp = head;

    if(head == NULL){
        head = n;
        return;
    }
    while(temp->next!=NULL){
        temp = temp->next;
    }
    temp->next = n;
    n->prev = temp;
}

void display(node* head){
    node* temp = head;
    while(temp!=NULL){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}
int main(){
    node* head = NULL;
    insertAtTail(head,1);
    insertAtTail(head,2);
    insertAtTail(head,3);
    insertAtTail(head,4);
    insertAtTail(head,5);

    display(head);

    deletion(head,2);
    display(head);

    deleteAtHead(head);
    display(head);
    return 0;
}