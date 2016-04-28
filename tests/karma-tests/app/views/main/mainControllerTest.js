describe("Main Controller", function () {

    var $controllerConstructor;
    var scope;
    var controller;

    beforeEach(module('app'));
    beforeEach(inject(function ($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        controller = $controllerConstructor('mainController', { 
            $scope: scope 
        });
    }));

    describe( 'On initialize', function() {
        it("check if main controller can be instantiated.", function () {
            expect(controller).toBe(controller);        
        });

        it("check if scope test is equal teste.", function () {
            expect(scope.test).toBe('teste');
        });
    } );
});