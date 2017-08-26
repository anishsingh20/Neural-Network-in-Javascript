
//using the synaptic library which allows us to create Neural network architectures
const { Layer , Network } = window.synaptic;

//creating the layers
var inputLayer = new Layer(2) ; //2 input units
var hiddenLayer = new Layer(4); //4 hidden neurons
var outputLayer = new Layer(1); //1 output neurons
