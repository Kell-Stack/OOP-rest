describe("Restaurant Recommender", function() {
    var RestaurantRecommender = require("../app/OOP-rest.js");
    var testRestaurantRecommender;
  
    beforeEach(function() {
      testRestaurantRecommender = new RestaurantRecommender();
    });
  
    describe("addRestaurant", function() {
      it("adds a restaurant", function() {
        expect(testRestaurantRecommender.restaurants.length).toEqual(0);
        testRestaurantRecommender.addRestaurant("a", "b", "", "");
        expect(testRestaurantRecommender.restaurants.length).toEqual(1);
      });
      it("sets the name of the restaurant", function() {
        testRestaurantRecommender.addRestaurant("a", "b", "", "");
        expect(testRestaurantRecommender.restaurants[0].restaurantName).toEqual(
          "a"
        );
      });
    });
  });