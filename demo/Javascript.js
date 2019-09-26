// Cross-browser xml parsing

const mapStateToProps = state => ({
  cicInvalid: isLoginFieldInvalid(state, 'cicNumber'),
  cliaInvalid: isLoginFieldInvalid(state, 'iataOrCliaNumber'),
  formValues: getLoginFormValues(state),
  isValid: getLoginFormIsValid(state),
  loginIsLoading: getLoginFormIsLoading(state),
  messages: getLoginFormMessages(state)
});

const o = 'text';
const t = <Outro key={`${o}_teste`}></Outro>;

if(teste === teste){

}
const outro = {

}
const varName = [
	{
		"teste": "valor"
	}
];

var i = true;

/**
 * RentalSummary - Rental summary details
 * @param {object} props - React properties object, the arguments passed to the component
 * @param {boolean} props.hasAfterHoursService - Flag that indicates if there's after hours service available
 * @param {boolean} props.loggedIn - Flag indicating if the user is logged in
 * @param {boolean} props.modify - Flag indicating that reservatin can be modified
 * @param {object} props.profile - Profile details object
 * @param {object} props.sessionDropoffLocation - Dropoff location details object
 * @param {string} props.sessionDropoffTime - Dropoff datetime from reservation
 * @param {object} props.sessionPickupLocation - Pickup location details object
 * @param {string} props.sessionPickupTime - Pickup datetime from reservation
 * @param {object} props.summary - Summary details from reservation
 *
 * @return {JSX} RentalSummary rendered
 */
const json = {
	"teste": "valor 1",
	"outro": "valor 2",
}

class teste extends Component {
	constructor(props) {
		super(props);

		this.teste = () => {}
	}
}

var parseXML = function( data ) {
 var xml, tmp;
 if ( !data || typeof data !== "string" ) {
	 return null;
 }
 try {
	 if ( window.DOMParser ) { // Standard
		 tmp = new DOMParser();
		 xml = tmp.parseFromString( data , "text/xml" );
	 } else { // IE
		 xml = new ActiveXObject( "Microsoft.XMLDOM" );
		 xml.async = false;
		 xml.loadXML( data );
	 }
 } catch( e ) {
	 xml = undefined;
 }
 if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
	 jQuery.error( "Invalid XML: " + data );
 }
 return xml;
};

// Bind a function to a context, optionally partially applying any arguments.
var proxy = function( fn, context ) {
 var tmp, args, proxy;

 if ( typeof context === "string" ) {
	 tmp = fn[ context ];
	 context = fn;
	 fn = tmp;
 }

 // Quick check to determine if target is callable, in the spec
 // this throws a TypeError, but we will just return undefined.
 if ( !jQuery.isFunction( fn ) ) {
	 return undefined;
 }

'(\\\.js)?'
 // Simulated bind
 args = core_slice.call( arguments, 2 );
 proxy = function() {
	 return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
 };

 // Set the guid of unique handler to the same of original handler, so it can be removed
 proxy.guid = fn.guid = fn.guid || jQuery.guid++;

 return proxy;
};

Sound.play = function() {}
Sound.prototype = {  }
Sound.prototype.play = function() {}
Sound.prototype.play = myfunc
var parser = document.createElement('a');
parser.href = "http://example.com:3000/pathname/?search=test#hash";
parser.hostname; // => "example.com"