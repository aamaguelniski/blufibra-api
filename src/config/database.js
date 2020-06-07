module.exports = { 
   development: {      
      dialect: "postgres",
      username: "postgres",
      password: "A7wQMBgXGTzEQm5L",
      database: "blufibra-dev",
      host: "186.232.154.26",
      define: {
         timestamps: true,
         underscored: true,
         underscoredAll: true
      }
   },
   test: {
      username: "postgres",
      password: "A7wQMBgXGTzEQm5L",
      database: "blufibra-tst",
      host: "186.232.154.26",
      dialect: "postgres",
      define: {
         timestamps: true,
         underscored: true,
         underscoredAll: true
      }
   },
   production: {
      username: "postgres",
      password: "A7wQMBgXGTzEQm5L",
      database: "blufibra-prod",
      host: "186.232.154.26",
      dialect: "postgres",
      define: {
         timestamps: true,
         underscored: true,
         underscoredAll: true
      }
   }
}