define( function ( ) {
    if (typeof(window) === 'undefined')
        window = global;

    if ( window.Q ) {
        return Q;
    }
    return window.require( 'Q' );
} );
