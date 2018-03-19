import chai, { expect } from 'chai';
import sinon from 'sinon';
import { showMessage, getDay, getAdultUsers, getRandomUsers, Product } from './main';

describe('showMessage testing', () => {
  it('Showing alert', () => {
    const origAlert = sinon.stub(window, alert, function(){ return true} );

    showMessage('test');
    expect(origAlert.called).to.be.equal(true);
  })
});