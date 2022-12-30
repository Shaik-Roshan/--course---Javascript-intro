//Array_filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

document.write(result);
// expected output: Array ["exuberant", "destruction", "present"]
