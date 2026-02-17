const student = {
  firstName: "Nika",
  lastName: "Gelashvili",
  grades: [70, 80, 60],

  getAverage(student) {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    const average = sum / this.grades.length;
    return average;
  },

  isPassing() {
    if (this.getAverage() >= 50) {
      console.log("passed Average", this.getAverage());
    } else {
      console.log("failed Average", this.getAverage());
    }
  },
};
student.isPassing();
