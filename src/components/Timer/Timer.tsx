import { Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import type { FC } from "react";


interface Props {
    // Props definition
    active?: boolean;
    duration?: number;
    
    onComplete?: () => void;
    onDecrement?: (timeLeft: number) => void;
}

const Timer: FC<Props> = ({

}) => {


  const [isActive, setIsActive] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(30); // default 30 seconds

//   useEffect(() => {
//     if (!originPageId) return;
//     setPageId(originPageId);
//   }, [originPageId]);

 
//   const { createEvent } = useCreateEventModalMutations({
//     pageId,
//     spaceId: viewerContextData?.viewerContext?.space?.id,
//     onSuccess,
//     navigateToEvent
//   });

  // Handlers
//   const handleCancel = () => {
//     onClose?.();
//   };

//   const handleCreateClick = async () => {
//     setSubmitLoading(true);

//     settingsFormRef?.current?.handleSubmit?.();

//     if (!viewerContextData?.viewerContext.space?.id || !settingsFormRef?.current?.isValid) {
//       setSubmitLoading(false);
//       return;
//     }

//     const { name, description, startsAt, endsAt, page } = settingsFormRef?.current?.values;
//     setPageId(page?.id);

//     await createEvent({
//       variables: {
//         input: {
//           name,
//           description,
//           startsAt: getLocalTimeZoneISO(startsAt),
//           endsAt: getLocalTimeZoneISO(endsAt),
//           pageIds: [page?.id]
//         }
//       }
//     });

    // onClose?.();

    
//   };


  return (
   
     <Typography variant="h5" gutterBottom>
        Timer Components
      </Typography>
  );
};

export default Timer;
