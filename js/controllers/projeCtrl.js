angular.module("proje").controller("projeCtrl", function($scope){
	$scope.app = "P R O J E\xa0\xa0G E N E R A T O R";
	$scope.mensagem = "clique no botão para gerar um P R O J E";
	$scope.urls = [['-Tdu4uKSZ3M', 'LdpMpfp-J_I', 'Gcagz8epRN8'],[0,0,0],['Yes','Rush','Camel'],['Roundabout','YYZ','Freefall'],['/yes/43560/','instrumental','/camel/161317/']];
	$scope.noMoreLinks = true;
	$scope.youtube = false
	var array= [];


 
	$scope.geraUrl = function gimmeLinks() {
        $scope.randomCodeIndex = [Math.floor((Math.random() * $scope.urls[0].length))];
        while($scope.urls[1][$scope.randomCodeIndex] == 1){
            $scope.randomCodeIndex = [Math.floor((Math.random() * $scope.urls[0].length))];
            //resets everything and prevents repeating videos
            var i = 0;
            while($scope.urls[1][i]==1){
                if(i == $scope.urls[1].length-1){
                    var j = 0;
                    for(j=0;j < $scope.urls[1].length; j++){
                        $scope.urls[1][j] = 0;
                    }
                    $scope.urls[1][$scope.previousRandomCodeIndex] = 1;
                }
                i++;
            }
        }
        $scope.urls[1][$scope.randomCodeIndex] = 1;
        $scope.previousRandomCodeIndex = $scope.randomCodeIndex;
        $scope.randomCode = $scope.urls[0][$scope.randomCodeIndex];
        document.getElementById("linkYT").src = "https://www.youtube.com/embed/"+$scope.randomCode;
	}

});