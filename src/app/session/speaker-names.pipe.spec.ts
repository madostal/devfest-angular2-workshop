/* tslint:disable:no-unused-variable */

import { SpeakerNamesPipe } from "./speaker-names.pipe";
import { Session } from "./Session.ts";

describe('Pipe: SpeakerNames', () => {

  let pipe;
  beforeEach(() => {
    pipe = new SpeakerNamesPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "" for null session', function(){
    expect(pipe.transform(null)).toBe("");
  });

  it('should return "" for null session.speakers', function(){
    let session: Session = {
      id: 1,
      title: 'title',
      tags: []
    };

    expect(pipe.transform(session)).toBe("");
  });

  it('should concatenate speaker names with comma', () => {
    let session: Session = {
      id: 1,
      title: 'title',
      tags: [],

      speakers : [

        {name: 'First', company: "FirstCompany"},
        {name: 'Second', company: "SecondCompany"},
        {name: 'Third', company: "ThirdCompany"}
      ]
    };

    expect(pipe.transform(session)).toBe("First, Second, Third");
  });

});
