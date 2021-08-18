angular.module("LunchCheck",[])
  
    .controller("LunchCheckController",LunchCheckController)
    LunchCheckController.$inject=$[scope]
    function LunchCheckController($scope){
        $scope.check=function(){
            if (!$scope.input){
  
                $scope.msg="Please enter data first"
            }
            else{
                var array=$scope.input.split(',')
                array1=array.filter(x=>x != " ")
                
                $scope.msg=message(array1.length)
            }
            
        }
        function message(n){
            if (n>3){
                temp="Too much!"
            }
            else{
                temp="Enjoy!"
            }
            return temp
            
        }

    }
        
        
