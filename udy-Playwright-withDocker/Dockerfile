FROM mcr.microsoft.com/playwright:v1.49.1-jammy

WORKDIR /app

# Copiar primero archivos de dependencias para cache
COPY package.json package-lock.json ./

# Instalar dependencias y Java
RUN apt-get update && \
    apt-get install -y --no-install-recommends openjdk-11-jre-headless && \
    rm -rf /var/lib/apt/lists/* \
    npm install

# Copiar el resto
COPY . .

ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64

CMD ["npm", "test"]