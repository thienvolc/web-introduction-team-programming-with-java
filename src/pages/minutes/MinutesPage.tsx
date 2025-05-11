interface Meeting {
  date: string;
  title: string;
  attendees: string[];
  agenda: string[];
  decisions: string[];
}

const memberNames = ['Võ Lưu Chí Thiện', 'Nguyễn Trường Vũ', 'Đặng Hữu Thọ', 'Trần Tuấn Minh'];

export function MinutesPage() {
  const meetings: Meeting[] = [{
    date: '15/03/2025',
    title: 'Khởi động dự án',
    attendees: [...memberNames],
    agenda: ['Thảo luận về phạm vi dự án', 'Phân công nhiệm vụ', 'Lập kế hoạch sprint đầu tiên'],
    decisions: ['Xác định các tính năng cốt lõi', 'Thống nhất tech stack', 'Lịch họp nhóm hàng tuần']
  }
  // Thêm các cuộc họp khác...
  ];
  return <div className="w-full bg-background py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Biên Bản Họp Nhóm
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Ghi chép các cuộc họp và quyết định quan trọng của nhóm
          </p>
        </div>
        <div className="space-y-8">
          {meetings.map((meeting, index) => <div key={index} className="p-6 bg-muted rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-primary">
                  {meeting.title}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {meeting.date}
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Thành viên tham dự:</h3>
                  <div className="flex flex-wrap gap-2">
                    {meeting.attendees.map((attendee, i) => <span key={i} className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">
                        {attendee}
                      </span>)}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Nội dung thảo luận:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {meeting.agenda.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Quyết định:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {meeting.decisions.map((decision, i) => <li key={i}>{decision}</li>)}
                  </ul>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}