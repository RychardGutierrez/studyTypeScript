//class are sugar around prototypes
interface IUser {
  getFullName(): string;
}

class UserI implements IUser {
  //public, private, protected
  private firstName: string;
  private lastName: string;
  //static properties
  static readonly maxAge = 50;

  public readonly unchangableName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} as ${this.lastName}`;
  }

  // changeUnchangableName(): void {
  //   this.unchangableName = "sss";
  // }
}

const userObject = new UserI("Lucas", "duck");

console.log(userObject.getFullName());
// console.log(userObject.maxAge);

class Admin extends UserI {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}
const admin = new Admin("Lucas", "boss");
admin.setEditor("new day");

console.log(admin.getFullName());

console.log(admin.getEditor());
