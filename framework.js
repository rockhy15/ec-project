var app = angular.module('myApp', [])
app.controller('myCtrl', function ($scope) {
  $scope.searchItems = [
    {
        section: 'womens',
        id: 1,
        name: 'Product : Rose Gold Watch',
        desc: 'Description : beautiful watch ',
        Image: 'images/rose gold.jpg',
        price: 'Price : 30,000',
      },
      {
        section: 'womens',
        id: 2,
        name: 'Product : Luxury Watch',
        desc: 'Description : good life',
        Image: 'images/luxury watch.jpg',
        price: 'Price : 20,000',
      },
      {
        section: 'womens',
        id: 3,
        name: 'Product : Citizen Watch',
        desc: 'Description : good looking',
        Image: 'images/citizen.jpg',
        price: 'Price : 15,000',
      },
      {
        section: 'womens',
        id: 4,
        name: 'Product : Fosil Watch',
        desc: 'Description : good performance ',
        Image: 'images/fosil.jpg',
        price: 'Price : 22,000',
      },
      {
        section: 'womens',
        id: 5,
        name: 'Product : Rolex Watch',
        desc: 'Description : high cost watch ',
        Image: 'images/rolex.jpg',
        price: 'Price : 59,999',
      },
      {
        section: 'womens',
        id: 6,
        name: 'Product : Sonata Watch ',
        desc: 'Description : best watch',
        Image: 'images/wat1.jpg',
        price: 'Price : 16,999',
      },
      
    {
      section: 'bikes',
      id: 7,
      name: 'Product : Royal Enfield',
      desc: 'Description : Mileage 35km/l',
      Image: 'images/royal.jpg',
      price: "1,80,000",
    },
    {
      section: 'bikes',
      id: 8,
      name: 'Product : Duke',
      desc: 'Description : Mileage 30km/l ',
      Image: 'images/duke.jpg',
      price: 'Price : 2,00,000',
    },
    {
      section: 'bikes',
      id: 9,
      name: 'Product : Pulsar ',
      desc: ' Description : Mileage 40km/l',
      Image: 'images/pulsar.jpg',
      price: ' Price : 1,50,000',
    },
    {
      section: 'bikes',
      id: 10,
      name: 'Product : RX100',
      desc: ' Description : Mileage 40km/l ',
      Image: 'images/rx100.jpg',
      price: ' Price :1,20,000',
    },
    {
      section: 'bikes',
      id: 11,
      name: 'Product : R15',
      desc: ' Description : Mileage 35km/l',
      Image: 'images/r15.jpg',
      price: ' Price : 2,23,000',
    },
    {
      section: 'bikes',
      id: 12,
      name: 'Product : Avenger',
      desc: ' Description : mileage 45km/l',
      Image: 'images/avenger.jpg',
      price: ' Price : 1,75,000',
    },
    {
        section: 'boys',
        id: 13,
        name: 'Product : Titan Watch',
        desc: ' Description : stylish Watch',
        Image: 'images/watch1.jpg',
        price: ' Price : 20,999',
      },
      {
        section: 'boys',
        id: 14,
        name: 'Product : Quartz Watch',
        desc: ' Description : Good looking',
        Image: 'images/watch2.jpg',
        price: ' Price : 32,000',
      },
      {
        section: 'boys',
        id: 15,
        name: 'Product : Fosil Watch',
        desc: ' Description : good performance',
        Image: 'images/watch3.jpg',
        price: ' Price :15,999',
      },
      {
        section: 'boys',
        id: 16,
        name: 'Product : Rolex Watch',
        desc: ' Description : Top-level watch ',
        Image: 'images/wa5.jpg',
        price: ' Price : 69,999',
      },
      {
        section: 'boys',
        id: 17,
        name: 'Product : Smart Watch',
        desc: ' Description : high features watch',
        Image: 'images/watch6.jpg',
        price: ' Price : 70,000',
      },
      {
        section: 'boys',
        id: 18,
        name: 'Product : Sumsung watch',
        desc: ' Description : Best watch',
        Image: 'images/watch7.jpg',
        price: ' Price : 75,000',
      },


  ]
  $scope.foundList = [];
  $scope.message = ''
  $scope.isVisible = false;
  $scope.show = function (item) {
    $scope.isVisible =  true;
  }
  $scope.add = function (item) {

    if (item) {

      $scope.foundList.push({

        name: item.name,
        desc: item.desc,

        price: item.price,

        Image: item.Image,
      });
      $scope.Items+=1;

    }

  };
  $scope.heart = function(event) {



    event.currentTarget.style.color = event.currentTarget.style.color == 'red' ? 'black' : 'red';

};


$scope.logPage =  true;

$scope.ContactPage = function () {
  $scope.logPage = true;
};

$scope.rocky= {$: undefined};
$scope.Data=false;

$scope.womenWatch= function() {
  // $scope.Data= true;
  $scope.isVisible =  true;
  $scope.searchText="women";
  }

$scope.bikes= function() {
// $scope.Data= true;
  
  $scope.isVisible =  true;
  $scope.searchText="bikes";
}
$scope.menWatch= function() {
 // $scope.Data= true;

  $scope.isVisible =  true;
  $scope.searchText="boys";
}
$scope.setFilter= function(){
  if($scope.searchText!=""){
    $scope.Data=true;
    $scope.rocky=$scope.searchText;
  }else{
    $scope.Data=false;
  }
};





  $scope.remove = function (add) {
    if (add)

      $scope.foundList.splice($scope.foundList.indexOf(add), 1)
      $scope.Items-=1;
  }


  $scope.rockers = false;
  $scope.openMahesh = function () {
    $scope.rockers = true;
  }



});
var app = angular.module('myForm', [])
app.controller('formCtrl', function ($scope) {
  $scope.user = [
    Name= '',
    surname= '',
    email= '',
    phonenumber= '',
    password= '',
    confirmpassword= '',
]
  $scope.message = '';
  $scope.users = [];


  $scope.formGroup = function () {
    if ($scope.user) {
      $scope.users.push({
        Name: $scope.Name,
        surname: $scope.surname,
        email: $scope.email,
        phonenumber: $scope.phonenumber,
        password: $scope.password,
        confirmpassword: $scope.confirmpassword,
      })
      console.log($scope.users);
    }
  }
  if(password == confirmpassword)$scope.message = 'Password is matched'
  if(password == !confirmpassword)$scope.message = 'Password is Miss matched'
})