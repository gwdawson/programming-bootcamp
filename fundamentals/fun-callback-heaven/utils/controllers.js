exports.checkLegacyStatus = errors => {
  if (Math.random() < 0.35) errors.push('500 - internal server error');
  else return '200 - the legacy server is up';
};

exports.getPic = (errors, db, pic) => {
  if (pic.includes('cat')) return `${pic}.jpg`;
  else errors.push(`ERROR: ${pic} not found!`);
};

exports.getBannerContent = (errors, db) => {
  return db.bannerContent;
};

exports.fetchOwners = (errors, db) => db.owners;

exports.checkStatus = () => '200 - the server is good';

exports.fetchCatsByOwner = (errors, db, owner) => {
  const cats = db.catsByOwner[owner];
  if (cats) return cats;
  else errors.push(`404 - ${owner} not found`);
};

exports.buyBuyBuy = (errors, db, outfit, handleResponse) => {
  const cost = db.outfits[outfit];
  const checkout = { quantity: 0, outfit, totalCost: 0 };
  if (!cost) {
    errors.push(`404 - ${outfit} not found`);
    return;
  } else {
    for (let i = 0; i < Math.floor(Math.random() * 1000); i++) {
      checkout.totalCost += cost;
      checkout.quantity++;
      handleResponse(null, checkout);
    }
    return checkout;
  }
};
