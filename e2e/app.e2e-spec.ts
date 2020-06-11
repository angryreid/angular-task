import { MyTaskMgrPage } from './app.po';

describe('my-task-mgr App', () => {
  let page: MyTaskMgrPage;

  beforeEach(() => {
    page = new MyTaskMgrPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
