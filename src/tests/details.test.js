import store from '../redux/configureStore';
import { fetchDetails } from '../redux/details/details';

const Mocked = {
  ceo: '',
  city: 'Fort Lauderdale',
  country: 'US',
  currency: 'USD',
  description:
 "Convey Health Solutions Holdings, Inc. provides technology enabled solutions and advisory services to assist its clients with workflows across product developments, sales, member experience, clinical management, core operations, and business intelligence and analytics. It operates through two segments, Technology Enabled Solutions and Advisory Services. The Technology Enabled Solutions segment offers technology solutions through web-based customizable application that is used to identify, track, and administer contractual services, or benefits provided under a client's plan to its Medicare and Medicaid beneficiaries. It also provides analytics over healthcare data to capture and assess gaps in risk documentation, quality, clinical care, and compliance. The company also offers health plan management, data analytics, supplemental benefit, advisory, and software services. The Advisory Services segment offers sales and marketing strategies, provider network strategies, compliance, star ratings, quality, clinical, pharmacy, analytics, and risk adjustment. It serves government sponsored, medicare advantage, medicare, as well as pharmacy benefits managers. The company was founded in 2001 and is headquartered in Fort Lauderdale, Florida. Convey Health Solutions Holdings, Inc. is a subsidiary of TPG Cannes Aggregation, L.P.",
  fullTimeEmployees: '2960',
  industry: 'Health Information Services',
  name: 'Convey Health Solutions Holdings, Inc.',
  phone: '800 559 9358',
  price: 10.3,
  sector: 'Healthcare',
  state: 'FL',
  image: 'https://financialmodelingprep.com/image-stock/CNVY.png',
};

describe('Store', () => {
  it('Details Reducer Has correct state', () => {
    store.dispatch(fetchDetails(Mocked));
    expect(store.getState().detailsReducer.sector).toBe('Healthcare');
  });
});
