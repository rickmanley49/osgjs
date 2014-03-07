define( function ( ) {
    if (typeof(window) === 'undefined')
        return require( 'Q' );

    if ( window.Q ) {
        return Q;
    }
    return window.require( 'Q' );
} );
