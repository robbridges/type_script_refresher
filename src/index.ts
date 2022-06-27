class Sorter {
  

  constructor(public collection: number[] | string) {}

  sort(): void {
    const {length} = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length -i - 1; j++) {
        // this type guard gives us access to all array methods inside the block scope. Above we only haved shared between array and string
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j]
            this.collection[j] = this.collection[j+1];
            this.collection[j+ 1] = temp;
          }
        }
      }
    }
  }
}

const sorter = new Sorter([4,42,42,1,4,5,76,8,67]);
sorter.sort();
console.log(sorter.collection);
