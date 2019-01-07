export class Candidate
{
    _id:string;
    election:string;
    candidatename :string;
    post:string;
    regnumber :string;
    degree :string;
    checked:boolean;
}
export class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
