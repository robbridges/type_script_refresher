import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList} from "./LinkedList";

const numbersCollection = new NumbersCollection([10,3,-5,0,3782979]);
const charactersCollection = new CharactersCollection('ayrhalksdhhu'); 
numbersCollection.sort();
console.log(numbersCollection.data)
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);linkedList.add(-10)
linkedList.add(4)
linkedList.sort();

linkedList.print();