(function(){
    angular.module("appModule",[])
    .controller("appController",appController);


    function appController($scope){
        $scope.name="";
        $scope.message="";
        $scope.showMessage=function(){
            var la=$scope.name.split(",");
            var l=la.length;
            if(l<=3){
                $scope.message="Enjoy!";
            }
            else{
                $scope.message="Too much!";
            }
        };
    }

})();
