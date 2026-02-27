import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    company : Text;
    message : Text;
  };

  let contactSubmissions = List.empty<ContactSubmission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, company : Text, message : Text) : async Bool {
    if (name == "" or email == "" or message == "") {
      Runtime.trap("Please fill all fields!");
    } else {
      let contactSubmission : ContactSubmission = {
        name;
        email;
        phone;
        company;
        message;
      };
      contactSubmissions.add(contactSubmission);
      true;
    };
  };

  public query ({ caller }) func getContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.toArray();
  };
};
