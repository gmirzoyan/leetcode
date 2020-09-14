/* Write your PL/SQL query statement below */
select Person.FirstName, Person.LastName, Address.City, Address.State
From Person
Left Join Address
on Person.PersonId = Address.PersonId
​
​
