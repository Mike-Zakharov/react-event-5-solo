const extractUniqueFilters = (requests) => {
  const uniqueValues = requests.reduce(
    (acc, request) => {
      acc.requesterType.add(request.requesterType);
      acc.helpType.add(request.helpType);
      acc.helperRequirements.helperType.add(request.helperRequirements.helperType);
      acc.helperRequirements.isOnline.add(request.helperRequirements.isOnline);
      acc.helperRequirements.qualification.add(request.helperRequirements.qualification);
      return acc;
    },
    {
      requesterType: new Set(),
      helpType: new Set(),
      helperRequirements: {
        helperType: new Set(),
        isOnline: new Set(),
        qualification: new Set(),
      },
    },
  );

  const result = {
    requesterType: Array.from(uniqueValues.requesterType),
    helpType: Array.from(uniqueValues.helpType),
    helperRequirements: {
      helperType: Array.from(uniqueValues.helperRequirements.helperType),
      isOnline: Array.from(uniqueValues.helperRequirements.isOnline),
      qualification: Array.from(uniqueValues.helperRequirements.qualification),
    },
  };

  return result;
};

export default extractUniqueFilters;
