var app = angular.module('ceparent.blog', [])
    .controller('BlogController', function ($scope, $rootScope) {

       
        $scope.articles = [];
        
        $scope.fakeload = function(){
            
            for(var i = 0; i < 3; i++){
                
                $scope.articles.push({
                    "title":"Teaching for learning - my first post",
                    "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu auctor ligula. Proin efficitur lorem ac urna auctor, eget cursus magna semper. Praesent nec nunc congue, fringilla dui ut, faucibus quam. In tincidunt odio quis nisi lobortis finibus. Nam molestie feugiat turpis a eleifend. Pellentesque interdum justo risus, vitae gravida erat molestie malesuada. Etiam maximus malesuada tellus. Nulla in ligula sed dui tincidunt dignissim. Nullam in velit lacinia, pulvinar felis eu, tempor mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eget maximus justo.Nunc dignissim lorem nec libero tincidunt imperdiet. Fusce lorem lacus, facilisis a dapibus ac, tincidunt vel diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis quam sem, dignissim suscipit erat rhoncus eget. Quisque dignissim, felis a pretium tincidunt, elit purus dapibus nisl, non viverra sem felis sed massa. Nulla rutrum ac velit id vehicula. Aliquam ut pharetra nunc. Sed iaculis iaculis purus, sit amet blandit justo sodales eget.Donec quis sodales diam. Duis quis interdum ipsum. Suspendisse arcu urna, molestie at fringilla sit amet, ullamcorper vel nibh. Nam consequat neque odio, id egestas elit faucibus a. Morbi accumsan tellus quis nisi auctor, in dapibus erat accumsan. Mauris eros metus, venenatis eu egestas eu, pulvinar a orci. Phasellus et risus lacus.Curabitur placerat, felis non ultricies auctor, odio tortor consectetur mi, eget bibendum elit purus lacinia ligula. Aliquam suscipit risus eu molestie malesuada. Donec eget porta orci. Aenean sit amet urna vitae massa tincidunt vehicula in eget est. Quisque lectus eros, viverra id sapien eu, maximus varius purus. Nunc aliquet, diam id varius tempor, libero lectus viverra velit, in tincidunt leo lorem egestas felis. Integer at felis vitae augue varius volutpat in quis mauris. Duis tincidunt tincidunt commodo. Phasellus turpis ligula, lobortis vitae convallis nec, vehicula cursus felis. Aenean aliquam felis ac augue lobortis, in dictum risus rutrum. Sed in nulla a magna vehicula blandit vitae nec elit. Nullam vitae sodales enim. Vestibulum gravida, arcu vel pretium tristique, lorem erat fermentum elit, at efficitur sapien tortor et tellus. Vivamus tristique nisi et iaculis rutrum.Vestibulum sed enim purus. Pellentesque vitae fermentum augue. Integer feugiat ultrices enim sed scelerisque. Proin ultricies porttitor est, sit amet porttitor ligula varius non. Proin vel tellus tincidunt, vehicula ipsum at, vulputate turpis. Nullam semper, ante ac cursus viverra, felis felis euismod tellus, non rutrum nisl nibh condimentum nibh. Mauris augue leo, suscipit a purus eget, efficitur fringilla orci. Proin blandit, felis quis vulputate tincidunt, massa risus dignissim libero, at semper nisi urna quis ligula.",
                    "date":"2014/12/" +(30 - i)
                });
                
            }
            
        }
        
        $scope.init = function(){
            $scope.fakeload();

        }
        $scope.init();


});
