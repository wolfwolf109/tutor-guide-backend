class TutorController {
    defaultMethod() {
      return {
        text: `You've reached the ${this.constructor.name} default method`
      };
    }
  }
  
  export = new TutorController();
  