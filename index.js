var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob'; 
}

function overwriteBestCustomer(newFavorite) {
  bestCustomer = newFavorite;
}

const leastFavoriteCustomer = 'Karen';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Not Karen'; 
}
