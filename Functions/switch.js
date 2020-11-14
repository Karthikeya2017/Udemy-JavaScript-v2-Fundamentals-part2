const valueA = undefined;
const valueB = 'XYZ';
const value: 'ABC' | 'DEF' | 'XYZ' = valueA ?? valueB;
switch() {
  case 'ABC':
    console.log('This is abc!');
    break;
  case 'DEF':
    console.log('this is def');
    break;
  case 'XYZ':
    console.log('this is xyz');
    break;
  default:
    console.log('this is nothing, so default');
    break; // or return or throw
}