FROM codeception/codeceptjs

WORKDIR /tests

COPY package*.json ./

RUN npm install

RUN npm install -g allure-commandline --save-dev

RUN apt-get update && \
    apt-get install -y openjdk-8-jdk && \
    apt-get install -y ant && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/ && \
    rm -rf /var/cache/oracle-jdk8-installer;

ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME

COPY . .

EXPOSE 5000

CMD [ "npm", "test" ]