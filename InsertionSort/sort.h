#ifndef SORT_H
#define SORT_H


#include <stddef.h>
#include <stdlib.h>

typedef struct listint_s
{
	const int n;
	struct listint_s *prev;
	struct listint_s *next;
} listint_t;

void print_list(const listint_t *list);
void insertion_sort_list(listint_t **list);

#endif /* SORT_H */
