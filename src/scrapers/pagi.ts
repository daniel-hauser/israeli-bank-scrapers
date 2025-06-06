import BeinleumiGroupBaseScraper from './base-beinleumi-group';

class PagiScraper extends BeinleumiGroupBaseScraper {
  BASE_URL = 'https://online.pagi.co.il/';

  LOGIN_URL = `${this.BASE_URL}/MatafLoginService/MatafLoginServlet?bankId=PAGIPORTAL&site=Private&KODSAFA=HE`;

  TRANSACTIONS_URL = `${this.BASE_URL}/wps/myportal/FibiMenu/Online/OnAccountMngment/OnBalanceTrans/PrivateAccountFlow`;
}

export default PagiScraper;
