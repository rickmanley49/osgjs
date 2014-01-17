define( [], function () {

    var FirstPersonManipulatorOculusController = function ( manipulator ) {
        this._manipulator = manipulator;
    };

    FirstPersonManipulatorOculusController.prototype = {
        update: function ( rot ) {
            // On oculus the up vector is [0,1,0]
            // On osgjs the up vector is [0,0,1]
            this._manipulator.setRotationBaseFromQuat( [ rot[ 0 ], -rot[ 2 ], rot[ 1 ], rot[ 3 ] ] );
        }
    };

    return FirstPersonManipulatorOculusController;
} );