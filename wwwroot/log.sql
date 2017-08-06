Opening connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Executed DbCommand (1ms) [Parameters=[@__id_0='?'], CommandType='Text', CommandTimeout='30']
SELECT TOP(1) [Actor].[MovieId], [Actor].[Genre], [Actor].[Name], [Actor].[ReleaseDate]
FROM [Movies] AS [Actor]
WHERE [Actor].[MovieId] = @__id_0
ORDER BY [Actor].[MovieId]Executed DbCommand (2ms) [Parameters=[@__id_0='?'], CommandType='Text', CommandTimeout='30']
SELECT [a].[ActorId], [a].[MovieId], [a].[Name], [a].[Surname]
FROM [Actors] AS [a]
INNER JOIN (
    SELECT DISTINCT TOP(1) [Actor].[MovieId]
    FROM [Movies] AS [Actor]
    WHERE [Actor].[MovieId] = @__id_0
    ORDER BY [Actor].[MovieId]
) AS [Actor0] ON [a].[MovieId] = [Actor0].[MovieId]
ORDER BY [Actor0].[MovieId]Closing connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Opening connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Beginning transaction with isolation level 'Unspecified'.Executed DbCommand (0ms) [Parameters=[@p0='?'], CommandType='Text', CommandTimeout='30']
SET NOCOUNT ON;
DELETE FROM [Actors]
WHERE [ActorId] = @p0;
SELECT @@ROWCOUNT;Executed DbCommand (1ms) [Parameters=[@p1='?'], CommandType='Text', CommandTimeout='30']
SET NOCOUNT ON;
DELETE FROM [Movies]
WHERE [MovieId] = @p1;
SELECT @@ROWCOUNT;Committing transaction.Closing connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Opening connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Executed DbCommand (0ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [Actor].[MovieId], [Actor].[Genre], [Actor].[Name], [Actor].[ReleaseDate]
FROM [Movies] AS [Actor]
ORDER BY [Actor].[MovieId]Closing connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Opening connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Executed DbCommand (1ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [Actor].[MovieId], [Actor].[Genre], [Actor].[Name], [Actor].[ReleaseDate]
FROM [Movies] AS [Actor]
ORDER BY [Actor].[MovieId]Closing connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Opening connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Executed DbCommand (1ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [Actor].[MovieId], [Actor].[Genre], [Actor].[Name], [Actor].[ReleaseDate]
FROM [Movies] AS [Actor]
ORDER BY [Actor].[MovieId]Closing connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Opening connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Executed DbCommand (0ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [Actor].[MovieId], [Actor].[Genre], [Actor].[Name], [Actor].[ReleaseDate]
FROM [Movies] AS [Actor]
ORDER BY [Actor].[MovieId]Closing connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Opening connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Executed DbCommand (0ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [Actor].[MovieId], [Actor].[Genre], [Actor].[Name], [Actor].[ReleaseDate]
FROM [Movies] AS [Actor]
ORDER BY [Actor].[MovieId]Closing connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Opening connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Beginning transaction with isolation level 'Unspecified'.Executed DbCommand (2ms) [Parameters=[@p0='?', @p1='?' (Size = 4000), @p2='?'], CommandType='Text', CommandTimeout='30']
SET NOCOUNT ON;
INSERT INTO [Movies] ([Genre], [Name], [ReleaseDate])
VALUES (@p0, @p1, @p2);
SELECT [MovieId]
FROM [Movies]
WHERE @@ROWCOUNT = 1 AND [MovieId] = scope_identity();Executed DbCommand (2ms) [Parameters=[@p3='?', @p4='?' (Size = 4000), @p5='?' (Size = 4000)], CommandType='Text', CommandTimeout='30']
SET NOCOUNT ON;
INSERT INTO [Actors] ([MovieId], [Name], [Surname])
VALUES (@p3, @p4, @p5);
SELECT [ActorId]
FROM [Actors]
WHERE @@ROWCOUNT = 1 AND [ActorId] = scope_identity();Committing transaction.Closing connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Opening connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Executed DbCommand (0ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [Actor].[MovieId], [Actor].[Genre], [Actor].[Name], [Actor].[ReleaseDate]
FROM [Movies] AS [Actor]
ORDER BY [Actor].[MovieId]Executed DbCommand (2ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [a].[ActorId], [a].[MovieId], [a].[Name], [a].[Surname]
FROM [Actors] AS [a]
WHERE EXISTS (
    SELECT 1
    FROM [Movies] AS [Actor]
    WHERE [a].[MovieId] = [Actor].[MovieId])
ORDER BY [a].[MovieId]Closing connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Opening connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Executed DbCommand (0ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [Actor].[MovieId], [Actor].[Genre], [Actor].[Name], [Actor].[ReleaseDate]
FROM [Movies] AS [Actor]
ORDER BY [Actor].[MovieId]Executed DbCommand (0ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [a].[ActorId], [a].[MovieId], [a].[Name], [a].[Surname]
FROM [Actors] AS [a]
WHERE EXISTS (
    SELECT 1
    FROM [Movies] AS [Actor]
    WHERE [a].[MovieId] = [Actor].[MovieId])
ORDER BY [a].[MovieId]Closing connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Opening connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Executed DbCommand (2ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [Actor].[MovieId], [Actor].[Genre], [Actor].[Name], [Actor].[ReleaseDate]
FROM [Movies] AS [Actor]
ORDER BY [Actor].[MovieId]Executed DbCommand (2ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [a].[ActorId], [a].[MovieId], [a].[Name], [a].[Surname]
FROM [Actors] AS [a]
WHERE EXISTS (
    SELECT 1
    FROM [Movies] AS [Actor]
    WHERE [a].[MovieId] = [Actor].[MovieId])
ORDER BY [a].[MovieId]Closing connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Opening connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Executed DbCommand (0ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [Actor].[MovieId], [Actor].[Genre], [Actor].[Name], [Actor].[ReleaseDate]
FROM [Movies] AS [Actor]
ORDER BY [Actor].[MovieId]Executed DbCommand (0ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [a].[ActorId], [a].[MovieId], [a].[Name], [a].[Surname]
FROM [Actors] AS [a]
WHERE EXISTS (
    SELECT 1
    FROM [Movies] AS [Actor]
    WHERE [a].[MovieId] = [Actor].[MovieId])
ORDER BY [a].[MovieId]Closing connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Opening connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Executed DbCommand (0ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [Actor].[MovieId], [Actor].[Genre], [Actor].[Name], [Actor].[ReleaseDate]
FROM [Movies] AS [Actor]
ORDER BY [Actor].[MovieId]Executed DbCommand (0ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [a].[ActorId], [a].[MovieId], [a].[Name], [a].[Surname]
FROM [Actors] AS [a]
WHERE EXISTS (
    SELECT 1
    FROM [Movies] AS [Actor]
    WHERE [a].[MovieId] = [Actor].[MovieId])
ORDER BY [a].[MovieId]Closing connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Opening connection to database 'film' on server '(localdb)\MSSQLLocalDB'.Executed DbCommand (0ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [Actor].[MovieId], [Actor].[Genre], [Actor].[Name], [Actor].[ReleaseDate]
FROM [Movies] AS [Actor]
ORDER BY [Actor].[MovieId]Executed DbCommand (2ms) [Parameters=[], CommandType='Text', CommandTimeout='30']
SELECT [a].[ActorId], [a].[MovieId], [a].[Name], [a].[Surname]
FROM [Actors] AS [a]
WHERE EXISTS (
    SELECT 1
    FROM [Movies] AS [Actor]
    WHERE [a].[MovieId] = [Actor].[MovieId])
ORDER BY [a].[MovieId]Closing connection to database 'film' on server '(localdb)\MSSQLLocalDB'.