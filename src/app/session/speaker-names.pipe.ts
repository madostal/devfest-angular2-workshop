import { Pipe, PipeTransform } from "@angular/core";
import { Session } from "./session";

@Pipe({
  name: 'speakerNames'
})
export class SpeakerNamesPipe implements PipeTransform {

  transform(session: Session): string {
    if (!session || !session.speakers) {
      return ""
    }

    return session.speakers.map(speaker => speaker.name).join(', ');
  }

}
