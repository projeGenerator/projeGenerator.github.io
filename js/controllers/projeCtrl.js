angular.module("proje").controller("projeCtrl", function($scope){
	$scope.app = "P R O G\xa0\xa0G E N E R A T O R";
	$scope.mensagem = "clique no botão para gerar um prog";
	$scope.urls = [['-Tdu4uKSZ3M', 'LdpMpfp-J_I', 'Gcagz8epRN8','R2F_hGwD26g','1VigPPJ6j40'],[0,0,0,0,0],['Yes','Rush','Camel','Tool','Dream Theater'],['Roundabout','YYZ','Freefall','The Pot','Learning to Live'],['/yes/43560/','instrumental','/camel/161317/','/tool/535467/','/dream-theater/11769/']];//youtube link, random repetition controller, band name, song name, letras.mus link for the lyrics scavenger
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
        $scope.band = $scope.urls[2][$scope.randomCodeIndex];
        $scope.song = $scope.urls[3][$scope.randomCodeIndex];
	}

});