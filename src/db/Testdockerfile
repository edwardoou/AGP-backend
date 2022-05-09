FROM mcr.microsoft.com/mssql/server:2019-latest

ENV ACCEPT_EULA=Y \
    MSSQL_SA_PASSWORD=dockerAGP

WORKDIR /init
COPY init-db.* ./

RUN chmod +x ./init-db.sh
RUN /opt/mssql/bin/sqlservr & ./init-db.sh
