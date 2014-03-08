define( function ( ) {
    if (typeof(window) === 'undefined'){
        if (global && global.Q)
            return global.Q;
        return require( 'Q' );
    }
    if ( window.Q ) {
        return window.Q;
    }
    return window.require( 'Q' );
} );
