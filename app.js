var cat_element = document.getElementById('catgories-element');
fetch(`https://prodapp.lifepharmacy.com/api/categories`)
  .then(response => response.json())
  .then(data => {
    data.data.map(cat_data => {

      cat_element.innerHTML += '<li> <button href="#" class=" w-full py-3 pr-10 pl-5 text-left flex hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white;"> <span class=" flex-1">' + cat_data.name + '</span> <span class="mr-auto my-auto"> <svg class="fill-current h-4 w-4 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg> </span> </button> ' +
        '<ul class="bg-white border rounded-sm absolute top-0 right-0 transition duration-200 ease-in-out origin-top-left hover-menu p-5 h-[32rem] overflow-auto border border-gray-300"> ' +
        '<li class="px-3 py-1 hover:bg-gray-100 ">' +
        '<div class="grid grid-cols-4 gap-x-10 gap-y-3 grid-rows-6 cat-elements mb-10">' +
        categoryChildrenData(cat_data.children) +
        '</div>  </li> </ul> </li>'

    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
function categoryChildrenData(chidren_data) {
  var data_children = "";
  // for(var i =0;i<3;i++){
  //   data_children += '<div class="font-bold">' + chidren_data.name + '</div> '
  // }
  for (var i of chidren_data) {
    data_children += '<div class="grid-flow-row mb-3"><div class="font-bold mb-5">' + i.name + '</div>' + sectionsData(i.sections) + '</div>'
  }
  return data_children;

}
function sectionsData(sectionsData) {
  var data_section = "";
  var limit = 5;
  if (sectionsData.length < 5) {
    limit = sectionsData.length;
  }
  for (var i = 0; i < limit; i++) {
    data_section += '<div class="mb-3">' + sectionsData[i].name + '</div>'
  }
  // for(var i of sectionsData){
  //   data_section += '<div>'+i.name+'</div>';
  // }
  if (limit === 5) {
    data_section += '<a href="#" class="text-blue-400">More...</a>'
  }
  return data_section;
}



var brands_section = document.getElementById('brands-section');
fetch(`https://prodapp.lifepharmacy.com/api/web/brands`)
  .then(response => response.json())
  .then(data => {
    
    data.data.brands.map(brand_data => {
      debugger;

      brands_section.innerHTML += '<div class="grid-flow-row mb-10"> <div class="flex flex-col mr-5">' +
        '<img class="mx-auto" src="' + brand_data.images.logo + '" alt="" width="150px">' +
        '<h5 class="text-center">' + brand_data.name + '</h5>' +
        '</div></div>'

    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
