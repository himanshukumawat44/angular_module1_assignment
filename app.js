(function(){
    angular.module("appModule",[])
    .controller("appController",appController);


    function appController($scope){
        $scope.name="";
        $scope.message="";
        $scope.showMessage=function(){
            var la=$scope.name.split(",");
            var l=la.length;
            if(l<=3 && l>0){
                $scope.message="Enjoy!";
            }
            else if(l==0){
                $scope.message="Please enter data first"
            }
            else{
                $scope.message="Too much!";
            }
        };
    }

})();
