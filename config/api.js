const ApiRootUrl = 'http://122.152.222.17:8080/api/';

module.exports = {
  PopularUrl: ApiRootUrl + 'sorts?sorts=popular',
  NewUrl: ApiRootUrl + 'sorts?sorts=new',
  FamousUrl: ApiRootUrl + 'sorts?sorts=famous',
  DetailUrl: ApiRootUrl + 'detail',
  Sorts: ApiRootUrl + 'sorts',
  MoreUrl: ApiRootUrl + 'book',
};