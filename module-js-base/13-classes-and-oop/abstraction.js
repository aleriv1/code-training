// #region abstraction in oop -- is using only those characteristics of an object that most accurately represent it on some particular system

class Footbaaller {
  constructor(name, club) {
    this.name = name;
    this.club = club;
  }

  shoot() {}
  celebrateGoul() {}
  pass() {}
}

class Forward extends Footbaaller {
  constructor(name, club) {
    super(name, club);
  }

  shoot() {
    console.log("A footballer hist the ball very hard");
  }
  celebrateGoul() {
    console.log("Yes! I scored the goal.");
  }
  pass() {
    console.log("An average pass.");
  }

  // as the result, we have redifined all methods (actions)
}

// #endregion abstraction in oop -- is using only those characteristics of an object that most accurately represent it on some particular system
