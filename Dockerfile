FROM cypress/base:16

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install --legay-peer-deps

RUN npm install --save-dev @babel/core @babel/present-env babel-loader webpack

RUN npx cypress install

RUN $(npm bin)/cypress verify

CMD ["npm", "run", "allure:report"]