
# Installing MSSQL on Docker M1
```docker run -e "ACCEPT_EULA=1" -e "MSSQL_SA_PASSWORD=Passw0rd" -e "MSSQL_PID=Developer" -e "MSSQL_USER=SA" -p 1433:1433 -d --name=mssql mcr.microsoft.com/azure-sql-edge```