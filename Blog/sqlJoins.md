What is a SQL JOIN?

SQL JOINs are used to combine data or rows from two or more tables in a database based on a common field between them. 
Here, JOIN is a means for combining fields from two tables by using values common to each.

They are mainly used when a user tries to retrieve data from tables that have one-to-many or many-to-many relationships. 
Due to normalization limitations, you may not have all of the information you need in one table. 
Normalization is necessary to maintain consistency, reduce redundancies, avoid multiple insertions and update anomalies. 
Suppose you have to merge the two tables. To do this they must have something in common. 
This doesn’t mean that both tables must have at least one column with the same name. T
he tables we want to join may not have a column of the same name, but they should be logically the same. 
You cannot merge two tables with a column with the same name but different data types.
