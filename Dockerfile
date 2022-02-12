FROM codeception/codeceptjs

WORKDIR /tests

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "test"]